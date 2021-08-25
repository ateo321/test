import { AddEdit } from 'components/users';
import { userService } from 'services';

export default AddEdit;

export async function getServerSideProps(context) {
	const { id } = context.query;
    const user = await userService.getById(id);

    return {
        props: { user }
    }
}