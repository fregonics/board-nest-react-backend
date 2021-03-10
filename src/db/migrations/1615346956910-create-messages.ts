import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMessages1615346956910 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(new Table({
            name: "messages",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "user_id",
                    type: "integer",
                },
                {
                    name: "content",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "fk_message_user",
                    columnNames: ["user_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "users",
                    onDelete: "cascade"
                }
            ]
        }))
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('messages')

    }

}
