import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  courses = [
  {
    id: 1,
    title: 'Programming with Python',
    description: 'Learn the fundamentals of Python programming with hands-on exercises and real-world projects.',
    imageUrl: 'img/course1.jpg',
    link: 'course/1.html'
  },
  {
    id: 2,
    title: 'Web Development with HTML/CSS',
    description: 'Master the basics of web development with HTML and CSS through practical tutorials and projects.',
    imageUrl: 'img/course2.jpg',
    link: 'course/2.html'
  },
  {
    id: 3,
    title: 'Data Science with Python',
    description: 'Explore the world of data science using Python, including data analysis, visualization, and machine learning.',
    imageUrl: 'img/course3.jpg',
    link: 'course/3.html'
  },
  {
    id: 4,
    title: 'Prompt Engineering',
    description: 'Learn how to effectively interact with AI models and create prompts that yield the desired results.',
    imageUrl: 'img/course4.jpg',
    link: 'course/4.html'
  },
  {
    id: 5,
    title: 'UI/UX Design',
    description: 'Discover the principles of user interface and user experience design to create engaging digital products.',
    imageUrl: 'img/course5.jpg',
    link: 'course/5.html'
  },
  {
    id: 6,
    title: 'Cloud Computing',
    description: 'Learn the fundamentals of cloud computing and how to deploy and manage applications in the cloud.',
    imageUrl: 'img/course6.jpg',
    link: 'course/6.html'
  },
  {
    id: 7,
    title: 'Cybersecurity Fundamentals',
    description: 'Learn the essential concepts of cybersecurity and how to protect digital assets from threats.',
    imageUrl: 'img/course7.jpg',
    link: 'course/7.html'
  },
  {
    id: 8,
    title: 'C#',
    description: 'Learn the fundamentals of C# programming and build robust applications.',
    imageUrl: 'img/course8.jpg',
    link: 'course/8.html'
  },
  {
    id: 9,
    title: 'ASP.NET',
    description: 'Learn how to build dynamic web applications using ASP.NET and C#.',
    imageUrl: 'img/course9.jpg',
    link: 'course/9.html'
  }
];
}
