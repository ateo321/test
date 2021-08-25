import { AddEdit } from 'components/users';
import { userService } from 'services';

export default AddEdit;

export async function getServerSideProps({ params }) {	
    const user = null;
	await userService.getById(1).then((response) => {
		   if(response.ok) {
			 return response.json();
		   } else {
			 throw new Error('Server response wasn\'t OK');
		   }
		 });

    return {
        props: { user }
    }
}