import { Injectable } from '@nestjs/common';
import { Users } from '../../entities/Users';
// import { responseData } from 'src/helpers/response.helper';
// import { RoleUser } from 'src/entities/RoleUser';
import { Roles } from 'src/entities/Roles';
import { queryMapping } from 'src/helpers/query.helper';
import { RoleUser } from 'src/entities/RoleUser';
@Injectable()
export class UserService {
    constructor() {
    }

    async getUser(accessToken: string): Promise<{}> {
        try {
            const data = await Users.createQueryBuilder("users")
                // .select(['users', 'roleUsers.roleId', 'roles.description'])
                .leftJoinAndSelect("users.roleUsers", "roleUsers")
                .leftJoinAndSelect("roleUsers.role", "roles")
                .innerJoin("users.oauthAccessTokens", "oauthAccessTokens")
                .where("oauthAccessTokens.id = :id", { id: accessToken })
                .getMany();
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
