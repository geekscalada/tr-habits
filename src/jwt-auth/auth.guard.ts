import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Observable } from 'rxjs';

@Injectable()
// This is the guard that we will use in the controller
// Jwt is the way of tell the guard that we want to use the JWT strategy
// that will import from 'passport-jwt' and inject with PassportStrategy class
export class JwtAuthGuard extends AuthGuard('jwt') {
  
  
    //TODO: Add to this guard, roles validation

  // Here we can add canActivate, etc. 

//     canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//     return validateRequest(request);
//   }

}