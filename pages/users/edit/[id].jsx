import { AddEdit2 } from 'components/users/AddEdit2';
import { userService } from 'services';

export default AddEdit2;

export function asycn getServerSideProps({ params }) {
    const user = await {"title":"Mr","firstName":"Frank","lastName":"Murphy","email":"frank.murphy@rustvale.com","role":"User","password":"sue123","id":1,"dateCreated":"2021-04-08T05:33:05.184Z","dateUpdated":"2021-04-15T07:20:22.768Z"};

    return {
        props: { user }
    }
}
