task :deploy do
  publish_msg = "Publication #{Time.now.to_s}"
  `mm-build`
  gitco = `git checkout gh-pages`
  unless gitco.any?
    `git rm --ignore-unmatch *[!.gitignore]`
    `mv build/* .`
    `git add .`
    `git commit -m "#{publish_msg}"`
    puts publish_msg
    `git checkout master`
  else
    puts gitco
  end
end
