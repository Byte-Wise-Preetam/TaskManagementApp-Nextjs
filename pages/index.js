import TaskManager from "./components/TaskManager";
import Head from 'next/head';

async function fetchTasks() {
  return [
    {
      id: "1",
      title: "Task 1",
      description: "Account Verification",
      priority: "high",
      status: "pending",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Backup Website",
      priority: "medium",
      status: "pending",
    },
    {
      id: "3",
      title: "Task 3",
      description: "HomeWork",
      priority: "low",
      status: "pending",
    },
    {
      id: "4",
      title: "Task 4",
      description: "SCRUM Meeting",
      priority: "high",
      status: "pending",
    },
  ];
}

export async function getServerSideProps() {
  const initialTasks = await fetchTasks();
  return {
    props: { initialTasks },
  };
}

export default function Home({ initialTasks }) {
  return (
    <>
      <Head>
        <title>Task Management App</title>
        <meta name="description" content="Josh Talks Assignment - Preetam Bhardwaj" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <TaskManager initialTasks={initialTasks} />
    </>
  );
}
