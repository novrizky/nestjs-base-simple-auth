import { Injectable } from '@nestjs/common';
import { OauthAccessTokens } from 'src/entities/OauthAccessTokens';
import { Users } from 'src/entities/Users';
import { responseData } from '../../helpers/response.helper';
import { EnvironmentService } from '../environment/environment.service';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';
import * as moment from 'moment';

@Injectable()
export class AuthService {

    constructor(
        private env: EnvironmentService
    ) {
    }

    async checkToken(accessToken: string): Promise<{}> {
        try {
            const tokenCount = await OauthAccessTokens.createQueryBuilder()
                .select("id")
                .where("id = :id", { id: accessToken })
                .andWhere("revoked = :revoked", { revoked: false })
                .andWhere("expires_at > :expiresAt", { expiresAt: moment(new Date()).format() })
                .getCount();
            if (!tokenCount) {
                throw new Error('Token inactive, please relogin|#401');
            } else {
                return true;
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async generateToken(userId): Promise<{}> {
        try {
            const accessToken = uuidv4();
            await OauthAccessTokens.createQueryBuilder()
                .insert()
                .values(
                    {
                        id: accessToken,
                        userId: userId,
                        clientId: userId,
                        revoked: false,
                        createdAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
                        updatedAt: moment(new Date()).format(),
                        expiresAt: moment(new Date()).add(
                            this.env.getInt('TOKEN_EXPIRE_VALUE'),
                            this.env.get('TOKEN_EXPIRE_UNIT')
                        ).format()
                    }
                )
                .execute();
            return accessToken;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async login(username, password): Promise<{}> {
        const SECRET_KEY = '27951200-9ea9-4f7c-968a-6a94663af86e';
        try {
            const user = await Users.createQueryBuilder()
                .select(["users.id", "users.name", "users.email", "users.remember_token"])
                .where("users.email = :email", { email: username })
                .andWhere("users.password = :password", { password: uuidv5(password, SECRET_KEY) })
                .getRawOne();

            if (!user) {
                throw new Error('Invalid Credentials!|#401');
            } else {
                // disable all active token
                // await this.revokeToken(user.id);

                // generate new token
                const accessToken = await this.generateToken(user.id);
                user['accessToken'] = accessToken;

                return user;
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async logout(accessToken: string): Promise<{}> {
        try {
            const data = await OauthAccessTokens.createQueryBuilder()
                .select("user_id")
                .where("id = :id", { id: accessToken })
                .getRawOne();

            await this.revokeToken(data.id, accessToken);

            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async revokeToken(userId, accessToken = null): Promise<{}> {
        try {
            if (!accessToken) {
                await OauthAccessTokens.createQueryBuilder()
                    .update()
                    .set(
                        {
                            revoked: true,
                            updatedAt: moment(new Date()).format(),
                        }
                    )
                    .where("user_id = :userId", { userId: userId })
                    .andWhere("revoked = :revoked", { revoked: false })
                    .execute();
                // console.log('number of changed row', var.raw.changedRows)
                return true;
            } else {
                await OauthAccessTokens.createQueryBuilder()
                    .update()
                    .set(
                        {
                            revoked: true,
                            updatedAt: moment(new Date()).format(),
                        }
                    )
                    .where("user_id = :userId", { userId: userId })
                    .andWhere("id = :id", { id: accessToken })
                    .andWhere("revoked = :revoked", { revoked: false })
                    .execute();
                return true;
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
