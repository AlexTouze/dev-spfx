import pnp from "sp-pnp-js";


export default class HelloWorldPnpTest {

    public getCurrentUser(): void {
        pnp.sp.web.currentUser.get().then(user => {
            console.log("user -->", user);
        });
    }
}