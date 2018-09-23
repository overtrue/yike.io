<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'yikeio client');

// Project repository
set('repository', 'git@github.com:overtrue/yike.io.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);
set('ssh_type', 'native');
set('ssh_multiplexing', true);
set('default_timeout', 1600);
set('deploy_path', '/www/yike.io');
set('writable_use_sudo', true);
set('clear_use_sudo', true);
set('cleanup_use_sudo', true);
set('http_group', 'www-data');
set('writable_mode', 'chown');
set('default_stage', 'production');
set('keep_releases', 2);

set('shared_files', [
    '.env.production',
]);

host('yike.io')
    ->stage('production')
    ->user('deployer')
    ->multiplexing(true);

desc('Run build.');

task('npm:install-and-compile', function(){
//    if (has('previous_release')) {
//        run('cp -R {{previous_release}}/node_modules {{release_path}}/node_modules');
//    }

    within('{{release_path}}', function () {
//        run('npm install --registry=http://registry.npm.taobao.org ');
        run('npm install');
        run('npm run build');
    });
});

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'npm:install-and-compile',
    'deploy:writable',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
