import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class UserOperation {
    constructor(props?: Partial<UserOperation>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    userOpHash!: string

    @Index_()
    @Column_("text", {nullable: false})
    sender!: string

    @Index_()
    @Column_("text", {nullable: false})
    paymaster!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    nonce!: bigint

    @Column_("bool", {nullable: false})
    success!: boolean

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    actualGasCost!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    actualGasUsed!: bigint

    @Column_("text", {nullable: false})
    txHash!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint
}
