export const DEFAULT_MARKS = {
  excellent: '85%',
  good: '65%',
  medium: '45%',
  bad: '25%',
  none: '0%'
};

export const LAB_RUBRICS = [
  {
    id: 'lab1',
    label: 'Lab 1 – Environment Setup',
    overview: 'Verify the local Linux environment, explain key package commands, and present tabulated outputs.',
    sufficientLabel: 'Descriptions are sufficient',
    sufficientComment: 'Lab 1 descriptions are excellent with clear evidence of the working environment.',
    insufficientIntro: 'Lab 1 descriptions are insufficient because:',
    ratingNote: 'Good if only one or two items are missing; otherwise medium.',
    thresholds: {
      goodMaxIssues: 2,
      mediumMaxIssues: 5
    },
    issues: [
      {
        id: 'lab1-no-environment-evidence',
        text: 'Evidence of the working environment is missing (screenshots of the OS setup are required).'
      },
      {
        id: 'lab1-no-package-explanations',
        text: 'Explanations of commands used when installing Linux packages are missing (e.g., sudo, apt, update, upgrade, python3 -V).'
      },
      {
        id: 'lab1-no-testing-explanations',
        text: 'Explanations of commands used when testing the installed environment are missing (e.g., describe-regions, --output table, Python script commands).'
      },
      {
        id: 'lab1-table-code-missing',
        text: 'The code to tabulate the print-based output is incomplete or missing.'
      },
      {
        id: 'lab1-table-code-explanation-missing',
        text: 'The code that tabulates the print-based output lacks explanations.'
      }
    ]
  },
  {
    id: 'lab2',
    label: 'Lab 2 – EC2 Automation & Container Basics',
    overview: 'Document the EC2 provisioning workflow and container setup, explaining AWS CLI and Docker commands.',
    sufficientLabel: 'Descriptions are sufficient',
    sufficientComment: 'Lab 2 descriptions are excellent and cover the full EC2 deployment journey.',
    insufficientIntro: 'Lab 2 descriptions are insufficient because:',
    ratingNote: 'Good if no more than four items are missing; otherwise medium.',
    thresholds: {
      goodMaxIssues: 4,
      mediumMaxIssues: 10
    },
    issues: [
      {
        id: 'lab2-no-cli-explanations',
        text: 'Explanations of AWS CLI commands used to provision the EC2 instance are missing (e.g., create-security-group, --group-name, authorize-security-group-ingress, --port 22, --cidr 0.0.0.0/0).'
      },
      {
        id: 'lab2-no-python-explanations',
        text: 'Explanations of the Python code used to create the EC2 instance are missing.'
      },
      {
        id: 'lab2-missing-ec2-code',
        text: 'The code that creates the EC2 instance is missing.'
      },
      {
        id: 'lab2-instance-naming',
        text: 'The EC2 instance name does not start with the student number.'
      },
      {
        id: 'lab2-instance-type',
        text: 'The EC2 instance type is not t3.micro.'
      },
      {
        id: 'lab2-container-explanation',
        text: 'Explanations of the steps to build and run the httpd container are missing or insufficient.'
      },
      {
        id: 'lab2-docker-commands',
        text: 'Explanations of the Docker commands used in the lab are missing.'
      },
      {
        id: 'lab2-hello-world-evidence',
        text: 'Evidence of getting “Hello World!” is missing.'
      },
      {
        id: 'lab2-console-listing',
        text: 'Evidence of listing the created instance via the AWS console is missing.'
      },
      {
        id: 'lab2-termination-explanation',
        text: 'Explanations of the manual instance termination process are missing.'
      }
    ]
  },
  {
    id: 'lab3',
    label: 'Lab 3 – S3 Backup & DynamoDB Indexing',
    overview: 'Demonstrate the scripted S3 backup process, DynamoDB integration, and provide supporting evidence.',
    sufficientLabel: 'Descriptions are sufficient',
    sufficientComment: 'Lab 3 descriptions are excellent with clear S3 and DynamoDB evidence.',
    insufficientIntro: 'Lab 3 descriptions are insufficient because:',
    ratingNote: 'Good if no more than four items are missing; otherwise medium.',
    thresholds: {
      goodMaxIssues: 4,
      mediumMaxIssues: 11
    },
    issues: [
      {
        id: 'lab3-no-prep-command-explanations',
        text: 'Explanations of commands that prepare files and directories are missing (e.g., mkdir).'
      },
      {
        id: 'lab3-bucket-naming',
        text: 'The S3 bucket name does not follow the required studentID-cloudstorage format.'
      },
      {
        id: 'lab3-save-code-missing',
        text: 'The code used to save files to S3 is missing.'
      },
      {
        id: 'lab3-bucket-layout',
        text: 'The S3 bucket objects do not follow the expected layout of rootdir/rootfile.txt and rootdir/subdir/subfile.txt.'
      },
      {
        id: 'lab3-restore-code-missing',
        text: 'The code used to restore files from S3 is missing.'
      },
      {
        id: 'lab3-save-code-explanation',
        text: 'Explanations of the code used to save files to S3 are missing.'
      },
      {
        id: 'lab3-restore-code-explanation',
        text: 'Explanations of the code used to restore files from S3 are missing.'
      },
      {
        id: 'lab3-cloudfiles-code-missing',
        text: 'The code that writes file attributes into the CloudFiles table is missing.'
      },
      {
        id: 'lab3-cloudfiles-explanation',
        text: 'Explanations of the code that writes file attributes into the CloudFiles table are missing.'
      },
      {
        id: 'lab3-dynamodb-location',
        text: 'The DynamoDB table was created on AWS instead of locally.'
      },
      {
        id: 'lab3-cloudfiles-attributes',
        text: 'The CloudFiles table shows incorrect attributes (e.g., userId and owner should match the root account, permissions should be FULL_CONTROL).'
      }
    ]
  },
  {
    id: 'lab4',
    label: 'Lab 4 – S3 Policies & KMS Integration',
    overview: 'Explain how bucket policies, KMS keys, and pycryptodome encryption are applied and evidenced.',
    sufficientLabel: 'Descriptions are sufficient',
    sufficientComment: 'Lab 4 descriptions are excellent and trace the security controls end to end.',
    insufficientIntro: 'Lab 4 descriptions are insufficient because:',
    ratingNote: 'Good if no more than four items are missing; otherwise medium.',
    thresholds: {
      goodMaxIssues: 4,
      mediumMaxIssues: 14
    },
    issues: [
      {
        id: 'lab4-policy-code-missing',
        text: 'The code that applies a policy to restrict bucket permissions is missing.'
      },
      {
        id: 'lab4-policy-command-explanations',
        text: 'Explanations of the commands used to restrict bucket permissions are missing.'
      },
      {
        id: 'lab4-template-resource',
        text: 'The template resource does not reference your own S3 bucket (e.g., arn:aws:s3:::<your_s3_bucket>/).'
      },
      {
        id: 'lab4-policy-evidence',
        text: 'Screenshots or outputs that show the bucket policy check are missing.'
      },
      {
        id: 'lab4-kms-code-missing',
        text: 'The code used to create a KMS key is missing.'
      },
      {
        id: 'lab4-kms-code-explanations',
        text: 'Explanations of the code used to create a KMS key are missing.'
      },
      {
        id: 'lab4-kms-policy-code-missing',
        text: 'The code used to attach a policy to the created KMS key is missing.'
      },
      {
        id: 'lab4-kms-policy-explanations',
        text: 'Explanations of the code used to attach a policy to the created KMS key are missing.'
      },
      {
        id: 'lab4-kms-evidence',
        text: 'Screenshots or outputs that demonstrate the KMS key check are missing.'
      },
      {
        id: 'lab4-kms-use-code-missing',
        text: 'The code that uses the KMS key is missing.'
      },
      {
        id: 'lab4-kms-use-explanations',
        text: 'Explanations of the code that uses the KMS key are missing.'
      },
      {
        id: 'lab4-pycryptodome-code-missing',
        text: 'The code that uses pycryptodome for encryption and decryption is missing.'
      },
      {
        id: 'lab4-pycryptodome-explanations',
        text: 'Explanations of the code that uses pycryptodome for encryption and decryption are missing.'
      },
      {
        id: 'lab4-answer-quality',
        text: 'The answer to the comparison question is not valid (consider performance, time, and cost).'
      }
    ]
  },
  {
    id: 'lab5',
    label: 'Lab 5 – Load Balancing & Auto Scaling Evidence',
    overview: 'Show the high-availability architecture, from EC2 provisioning to load balancer validation and shutdown.',
    sufficientLabel: 'Descriptions are sufficient',
    sufficientComment: 'Lab 5 descriptions are excellent and confirm the full load balancing workflow.',
    insufficientIntro: 'Lab 5 descriptions are insufficient because:',
    ratingNote: 'Good if no more than four items are missing; otherwise medium.',
    thresholds: {
      goodMaxIssues: 4,
      mediumMaxIssues: 9
    },
    issues: [
      {
        id: 'lab5-az-evidence',
        text: 'Evidence that the two EC2 instances reside in different availability zones is missing.'
      },
      {
        id: 'lab5-instance-evidence',
        text: 'Screenshots or other evidence of creating two instances are missing.'
      },
      {
        id: 'lab5-instance-naming',
        text: 'The instance name does not start with the student number.'
      },
      {
        id: 'lab5-instance-type',
        text: 'The instance type is not t3.micro.'
      },
      {
        id: 'lab5-alb-code-missing',
        text: 'The code that creates an application load balancer is missing.'
      },
      {
        id: 'lab5-alb-code-explanations',
        text: 'Explanations of the code used to create the application load balancer are missing (load balancer, target group, register targets, listener).'
      },
      {
        id: 'lab5-alb-test-commands',
        text: 'Explanations of the commands used to test the application load balancer are missing (updating instances, installing apache2, editing index.html tags).'
      },
      {
        id: 'lab5-apache-page',
        text: 'The Apache test page does not show the correct instance name.'
      },
      {
        id: 'lab5-termination-explanations',
        text: 'Explanations of the manual instance termination process are missing.'
      }
    ]
  }
];
