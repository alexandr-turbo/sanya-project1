### Установка зависимостей проекта после скачивания ###

npm install

## Запуск проекта ##

gulp

## Отправка кода на проверку ##

### Создаем ветку: ###
1) Пишем имя ветки которую хотим создать
http://i.imgur.com/99X2NQ0.png
2) Нажимаем Create branch
http://i.imgur.com/j7PwVk4.png
3) в терминале команда git fetch --all
4) в терминале git checkout -b /имя-созданной-ветки
http://i.imgur.com/HdycPDz.png

### Добавляем изменения в ветку(этот шаг желательно делать каждый день после внесения большого количества изменений): ###

Если сразу после создания ветки:
1) пишем код, верстаем, стилизуем.. и т.п
2) добавляем изменения в ветку 
команды в терминале:
git add .
git commit -m "коментарий к изменениям"
git push --set-upstream origin name-of-branch
http://i.imgur.com/eSxdYCh.png

Если уже писали строку "git push --set-upstream origin имя-созданной-ветки" в этой ветке:
1) пишем код, верстаем, стилизуем.. и т.п
2) добавляем изменения в ветку 
команды в терминале:
git add .
git commit -m "коментарий к изменениям"
git push
http://i.imgur.com/eqxg99q.png

### Запрос на слияние изменений в ветку master ###
1) переходим на нашу ветку 
http://i.imgur.com/CxtiRrh.png
2) жмакаем на кнопку Pull request
http://i.imgur.com/CKJpgLH.png
3) проверяем, что сливаем именно нашу ветку в master и нажимаем Сreate pull request
http://i.imgur.com/NfjOA6u.png
4) пишем мне, что отправили Pull request
5) после того как я подтвержу слияние - навая инфа появится в ветке master 