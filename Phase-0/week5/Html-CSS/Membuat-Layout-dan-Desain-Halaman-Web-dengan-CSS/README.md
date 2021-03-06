# Menghias Laman HTML dengan CSS Layouting

## Objectives

Dengan menggunakan CSS kamu dapat membuat layout serta menghias halaman HTML yang sebelumnya sudah dibuat menjadi lebih bagus. Kali ini kamu ditantang untuk membuat layout web blog sederhana!

## Directions

1. Membuat File HTML

   Buatlah sebuah file HTML bernama _index.html_ di sebuah folder bernama _project-css-layouting_. Gunakan kode yang sudah disiapkan berikut:   

   ``` HTML
   <html>

    <head>
        <link href="style.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
    </head>

    <body>
        <header>
            <img id="logo" src="img/sample-logo.png" width="200px" />
            <nav>
                <ul>
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>
        </header>
        <section>
            <h1>Featured Posts</h1>
            <div id="article-list">
                <article>
                    <a href="">
                        <h3>Lorem Post 1</h3>
                    </a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                </article>
                <article>
                    <a href="">
                        <h3>Lorem Post 2</h3>
                    </a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                </article>
                <article>
                    <a href="">
                        <h3>Lorem Post 3</h3>
                    </a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                </article>
                <article>
                    <a href="">
                        <h3>Lorem Post 4</h3>
                    </a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                </article>
                <article>
                    <a href="">
                        <h3>Lorem Post 5</h3>
                    </a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                </article>
            </div>
        </section>
        <footer>
            <h5>copyright &copy; 2016 by HACKFOX</h5>
        </footer>
    </body>

    </html>
   ```

2. Membuat File CSS

   Buatlah sebuah file CSS bernama style.css pada folder yang sama dengan file index.html yang telah di hubungkan pada file html tersebut.

    ``` HTML 
    <link href="style.css" rel="stylesheet" type="text/css"> 
    ```

3. Menyiapkan Aset Gambar

    Buatlah sebuah folder di project tersebut dengan nama _img_, dimana kita akan meletakkan aset gambar kita disana. Aset gambar bisa kamu save as dari gambar di bawah ini:

    ![Anchor CSS](./img/sample-logo.png "Layout 1")
    ![Anchor CSS](./img/sample-pattern.png "Layout 2")

4. Membuat Layout dan Desain

    Sesuaikan kode html yang telah terhubung dengan css di atas, buatlah halaman HTML menjadi lebih bagus dan sesuai dengan tampilan di bawah ini!

    ![Contoh Hasil Akhir CSS Layouting](./img/contoh-css-layouting.gif "Contoh Hasil Akhir CSS Layouting")

5. Pengumpulan
Upload challenge ini dalam repository organization dengan membuat branch dan pull request

    **Syntax Penting**

    - color
    - font-size
    - font-family
    - background
    - font-weight
    - text-align
    - text-decoration
    - position
    - cursor
