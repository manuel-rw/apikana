import rename from 'gulp-rename';
import File from 'vinyl';
import through from 'through2';
import params from './params';

var variables = params.enrichWithParams({});

export default {
    variables: function () {
        return variables;
    },
    generate: function (source, dest) {
        return source
            .pipe(rename('variables.js'))
            .pipe(enrichWithEnv())
            .pipe(dest);

        function enrichWithEnv() {
            return through.obj(function (file, enc, cb) {
                variables = params.enrichWithParams(JSON.parse(file.contents));
                this.push(new File({
                    path: file.path,
                    contents: new Buffer('var variables=' + JSON.stringify(variables, null, 2))
                }));
                cb();
            });
        }
    }
};

