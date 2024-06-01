import { Outlet, useNavigate } from "react-router-dom";

export default function DashBoardPage() {
    const navigate = useNavigate();

    return (
        <div className="DashboardPage componentBox">
            <h1>Dashboard</h1>

            {/* used to render child route elements inside parent route */}
            <Outlet />

            <button onClick={() => navigate('/dash/tasks')}>
                Show Tasks
            </button>
            <button onClick={() => navigate('/dash/messages')}>
                Show Messages
            </button>
            <button onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    )
}

// nested route paths

export function DashboardMessages(props) {
    // const { currentUser } = useUserContext();
    return (
        <div className="DashboardMessages">
            {/* <p>Welcome to your dashboard, {currentUser.email}</p> */}
            <p>placeholder for missing currentUser context</p>
        </div>
    )
}
export function DashboardTasks(props) {
    const tasks = [
        { id: 1, name: 'Learn React' },
        { id: 2, name: 'Decide on capstone project' },
        { id: 3, name: 'Learn databases' }
    ]
    return (
        <div className="DashboardTasks">
            <ul className="tasks">
                {tasks.map(task => <li key={task.id}>{task.name}</li>)}
            </ul>
        </div>
    )
}