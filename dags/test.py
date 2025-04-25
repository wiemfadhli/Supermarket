from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from datetime import datetime

# Define the function to be executed by the PythonOperator
def print_hello():
    print("Hello, Airflow!")

# Define the default arguments for the DAG
default_args = {
    'owner': 'airflow',
    'start_date': datetime(2025, 4, 25),  # Set a start date
    'retries': 1,  # How many times to retry the task on failure
}

# Define the DAG
dag = DAG(
    'test_dag',  # The name of your DAG
    default_args=default_args,  # Default arguments
    description='A simple test DAG',
    schedule_interval=None,  # This means it won't run on a schedule, you can trigger it manually
)

# Create the task (operator) using PythonOperator
hello_task = PythonOperator(
    task_id='hello_task',
    python_callable=print_hello,  # The function to run
    dag=dag,  # The DAG that this task belongs to
)

# Set task dependencies (in this case, there is only one task)
hello_task
