import { Injectable, HttpException} from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers(): Promise<any> {
        return new Promise(resolve => {
            resolve('users');
        });
    }
    getUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            // const user = this.users.find(user => user.id === id);
            // if (!user) {
            //     throw new HttpException('user does not exist!', 404);
            // }
            resolve('a user');
        });
    }
    addUser(user): Promise<any> {
        return new Promise(resolve => {
            resolve('users');
        });
    }
    deleteUser(userID): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve => {
            resolve('user deleted');
        });
    }
}