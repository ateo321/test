import { AddEdit } from 'components/users/AddEdit';
import { userService } from 'services';

export default AddEdit;

export async function getServerSideProps({ params }) {
    const user = await userService.getById(params.id);

    return {
        props: { user }
    }
}
