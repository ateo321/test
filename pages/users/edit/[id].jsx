import { AddEdit2 } from 'components/users/AddEdit2';
import { userService } from 'services';

export default AddEdit2;

export async function getServerSideProps({ params }) {
    const user = await userService.getById(params.id);

    return {
        props: { user }
    }
}

