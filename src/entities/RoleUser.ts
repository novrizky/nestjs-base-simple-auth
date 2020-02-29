import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users";
import { Roles } from "./Roles";

@Entity("role_user", { schema: "simk3" })
export class RoleUser extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "role_id" })
  roleId: number;

  @ManyToOne(()=>Roles, (roles: Roles)=>roles.roleUsers,{ nullable:false,onDelete: 'NO ACTION',onUpdate: 'NO ACTION' })
  @JoinColumn({ name:'role_id'})
  role:Roles | null;

  @Column("int", { name: "user_id" })
  userId: number;

  @ManyToOne(()=>Users, (users: Users)=>users.roleUsers,{ nullable:false,onDelete: 'NO ACTION',onUpdate: 'NO ACTION' })
  @JoinColumn({ name:'user_id'})
  user:Users | null;
}
