provider "aws" {
  region = "us-east-1"
}

resource "aws_ecs_cluster" "goatkeeper" {
  name = "goatkeeper-cluster"
}

resource "aws_ecs_task_definition" "goatkeeper_task" {
  family = "goatkeeper"
  network_mode = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  memory = "512"
  cpu = "256"

  container_definitions = jsonencode([{
    name = "goatkeeper-frontend",
    image = "your-frontend-image",
    essential = true,
    portMappings = [{
      containerPort = 80,
      hostPort = 80
    }]
  }, {
    name = "goatkeeper-backend",
    image = "your-backend-image",
    essential = true,
    portMappings = [{
      containerPort = 3000,
      hostPort = 3000
    }]
  }])
}

resource "aws_ecs_service" "goatkeeper_service" {
  name = "goatkeeper-service"
  cluster = aws_ecs_cluster.goatkeeper.id
  task_definition = aws_ecs_task_definition.goatkeeper_task.arn
  desired_count = 1
  launch_type = "FARGATE"

  network_configuration {
    subnets = ["your-subnet-id"]
    security_groups = ["your-security-group-id"]
  }
}
