import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <Icon name="Pickaxe" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                3 СЕЗОН CHERPAL
              </h1>
              <p className="text-sm text-gray-500">Ванильное выживание</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              О сервере
            </a>
            <a
              href="#commands"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Команды
            </a>
            <a
              href="#stats"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Статистика
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            Версия 1.20.1
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ванильное выживание
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Честный Minecraft без модов, приватов и администрации. Только ты,
            друзья и бескрайний мир приключений.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-gray-900 text-white px-6 py-3 rounded-lg font-mono text-lg">
              play.vanillacraft.ru
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Icon name="Copy" size={20} className="mr-2" />
              Скопировать IP
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Статистика сервера
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-green-600">
                  24
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Игроков онлайн</p>
                <Progress value={48} className="mt-2" />
                <p className="text-sm text-gray-500 mt-1">Максимум: 50</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">
                  247
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Дней без вайпа</p>
                <div className="flex items-center justify-center mt-2">
                  <Icon
                    name="Calendar"
                    size={16}
                    className="text-gray-400 mr-1"
                  />
                  <p className="text-sm text-gray-500">Стабильный мир</p>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">
                  1,234
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Активных игроков</p>
                <div className="flex items-center justify-center mt-2">
                  <Icon name="Users" size={16} className="text-gray-400 mr-1" />
                  <p className="text-sm text-gray-500">За месяц</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            О сервере
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Чистый Minecraft
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500 mr-3"
                  />
                  Без модов и плагинов
                </li>
                <li className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500 mr-3"
                  />
                  Без приватов территорий
                </li>
                <li className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500 mr-3"
                  />
                  Без читов и дюпов
                </li>
                <li className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500 mr-3"
                  />
                  Без администрации в игре
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Правила сервера
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Icon
                    name="Shield"
                    size={20}
                    className="text-blue-500 mr-3"
                  />
                  Уважение к другим игрокам
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Shield"
                    size={20}
                    className="text-blue-500 mr-3"
                  />
                  Запрет на читы и эксплойты
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Shield"
                    size={20}
                    className="text-blue-500 mr-3"
                  />
                  Никакого спама в чате
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Shield"
                    size={20}
                    className="text-blue-500 mr-3"
                  />
                  Игра в духе ванильного Minecraft
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Основные команды
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  /spawn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Телепорт на спавн сервера</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  /sethome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Установить домашнюю точку</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  /home
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Телепорт домой</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  /tpa [игрок]
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Запрос телепорта к игроку</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  /msg [игрок]
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Личное сообщение</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  /list
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Список игроков онлайн</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4">Присоединяйся к нам!</h4>
            <p className="text-gray-300 mb-6">
              Сервер работает 24/7. Заходи и стройте вместе с нами!
            </p>
            <div className="bg-gray-800 inline-block px-6 py-3 rounded-lg font-mono text-lg">
              play.vanillacraft.ru
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 VanillaCraft. Честный Minecraft сервер.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
