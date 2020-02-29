import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { OauthAccessTokens } from "./OauthAccessTokens";
import { RoleUser } from "./RoleUser";

@Index("users_email_unique", ["email"], { unique: true })
@Entity("users", { schema: "simk3" })
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "email", unique: true, length: 191 })
  email: string;

  @Column("text", { name: "password", select: false})
  password: string;

  @Column("varchar", { name: "image", nullable: true, length: 191 })
  image: string | null;

  @Column("varchar", { name: "remember_token", nullable: true, length: 100, select: false })
  rememberToken: string | null;

  @Column("text", { name: "api_token", nullable: true, select: false })
  apiToken: string | null;

  @Column("timestamp", { name: "created_at", nullable: true, select: false })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true, select: false })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true, select: false })
  deletedAt: Date | null;

  @OneToMany(()=>OauthAccessTokens, (oauthAccessTokens: OauthAccessTokens)=>oauthAccessTokens.users,{ onDelete: 'NO ACTION' ,onUpdate: 'NO ACTION' })
  oauthAccessTokens:OauthAccessTokens[];

  @OneToMany(()=>RoleUser, (roleUser: RoleUser)=>roleUser.user,{ onDelete: 'NO ACTION' ,onUpdate: 'NO ACTION' })
  roleUsers:RoleUser[];
}
