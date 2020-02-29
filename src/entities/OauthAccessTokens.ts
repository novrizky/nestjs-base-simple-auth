import { Column, Entity, Index, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Users } from "./Users";

@Index("oauth_access_tokens_user_id_index", ["userId"], {})
@Entity("oauth_access_tokens", { schema: "simk3" })
export class OauthAccessTokens extends BaseEntity{
  @Column("varchar", { primary: true, name: "id", length: 100 })
  id: string;
  
  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @ManyToOne(()=>Users, (users: Users)=>users.oauthAccessTokens,{ nullable:false,onDelete: 'NO ACTION',onUpdate: 'NO ACTION' })
  @JoinColumn({ name:'user_id'})
  users:Users | null;

  @Column("int", { name: "client_id" })
  clientId: number;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("text", { name: "scopes", nullable: true })
  scopes: string | null;

  @Column("tinyint", { name: "revoked", width: 1 })
  revoked: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "expires_at", nullable: true })
  expiresAt: Date | null;
}
