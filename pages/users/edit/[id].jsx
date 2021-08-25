import { AddEdit } from 'components/users';

export default AddEdit;

export async function getServerSideProps({ params }) {
	const test = {"title":"Mr","firstName":"Frank","lastName":"Murphy","email":"frank.murphy@rustvale.com","role":"User","password":"sue123","id":"${params.id}","dateCreated":"2021-04-08T05:33:05.184Z","dateUpdated":"2021-04-15T07:20:22.768Z"};
    const user = await userService.getById(1);

    return {
        props: { user }
    }
}