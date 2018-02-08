echo "Test!"
cp ./src/test/*.* ./target/app/
nohup xdg-open ./target/app/page.html &t 2> /dev/null
