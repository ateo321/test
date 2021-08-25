import { AddEdit } from 'components/users';
import { userService } from 'services';

export default AddEdit;

export async function getServerSideProps({ params }) {
    const user = await getAll()[0];

    return {
        props: { user }
    }
}