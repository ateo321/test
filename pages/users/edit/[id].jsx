import { AddEdit } from 'components/users';
import { userService } from 'services';

export default AddEdit;

export async function getServerSideProps({ params }) {
    const user = await userService.getById(1);

    return {
        props: { user }
    }
}