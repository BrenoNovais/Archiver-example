import fs from 'fs';
import archiver from 'archiver';

const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

archive.pipe(
    fs.createWriteStream("./TESTE.zip")
)

archive.file("TESTE.sql")

archive.finalize();