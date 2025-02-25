import {Model} from '@nozbe/watermelondb';
import {field, date} from '@nozbe/watermelondb/decorators';

// Definição do Modelo correspondente
export class Password extends Model {
  static table = 'passwords';

  @field('name') name!: string;
  @field('password') password!: string;
  @date('created_at') createdAt!: number;
  @date('updated_at') updatedAt!: number;

  prepareUpdate() {
    this.updatedAt = Date.now();
    return this;
  }
}
