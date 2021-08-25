import { AddEdit } from 'components/users';
import { userService } from 'services';

export default AddEdit;

export function getServerSideProps({ params }) {
    const user = userService.getById(params.id);

    return {
        props: { user }
    }
}