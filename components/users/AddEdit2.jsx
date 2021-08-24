import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { userService, alertService } from 'services';

export { AddEdit2 };

function AddEdit2() {
	
    function onSubmit(data) {
        return 0;
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{'Edit User'}</h1>            
        </form>
    );
}