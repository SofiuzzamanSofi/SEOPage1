import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Task from '../Component/Task/Task';

const TodoLayout: React.FC = () => {

    // const taskInfo = useContext(TaskContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <section>
            <Task setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
            <Outlet />
        </section>
    );
};

export default TodoLayout;