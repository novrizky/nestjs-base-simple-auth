import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";
import { RoleUser } from "./RoleUser";

@Entity("roles", { schema: "simk3" })
export class Roles extends BaseEntity{
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "description", length: 191 })
  description: string;

  @OneToMany(()=>RoleUser, (roleUser: RoleUser)=>roleUser.role,{ onDelete: 'NO ACTION' ,onUpdate: 'NO ACTION' })
  roleUsers:RoleUser[];
}
