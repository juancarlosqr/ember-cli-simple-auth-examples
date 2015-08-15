import Ember from 'ember';

import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
    actions: {
        facebookLogin() {
            return this.get('session')
                .authenticate('simple-auth-authenticator:torii', 'facebook-oauth2');
        },
        authenticate() {
            var data = this.controller.getProperties('identification', 'password');
            return this.get('session')
                .authenticate('simple-auth-authenticator:oauth2-password-grant', data);
        }
    }
});
