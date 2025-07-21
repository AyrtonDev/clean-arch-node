import type { Encrypter } from '@/data/protocols/encrypter'
import type { AccountModel } from '@/domain/models/account'
import type { AddAccount, AddAccountModel } from '@/domain/usecases/add-account'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password)

    const response = {
      id: 'valid_id',
      name: account.name,
      email: account.email,
      password: hashedPassword,
    }

    return await Promise.resolve(response)
  }
}
