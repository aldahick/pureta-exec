import * as orm from "typeorm";

// Standard TypeORM: http://typeorm.io
@orm.Entity()
export default class ExampleItem {
    @orm.PrimaryGeneratedColumn()
    id: number;

    @orm.Column()
    value: string;
}
