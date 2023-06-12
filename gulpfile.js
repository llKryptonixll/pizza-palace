import gulp from 'gulp';
import gulpWebp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

async function compressImages() {
    gulp.src(['public/images/*.jpg', 'public/images/*.png'])
    .pipe(imagemin())
    .pipe(gulpWebp())
    .pipe(gulp.dest('public/compressedImages'))
}

async function compressIcons() {
  gulp.src(['public/icons/*.jpg', 'public/icons/*.png'])
    .pipe(imagemin())
    .pipe(gulpWebp())
    .pipe(gulp.dest('public/compressedIcons'))
}

export default gulp.series(compressIcons, compressImages);

