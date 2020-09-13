import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';

let authenticateUserService: AuthenticateUserService;
let fakeUsersRepository: FakeUsersRepository;

describe('Authenticate Users', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    authenticateUserService = new AuthenticateUserService(fakeUsersRepository);
  });

  it('should be able to make an authentication', async () => {
    return null;
  });
});
