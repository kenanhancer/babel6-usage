import defaultNamedExport from './default-named-export';
import { group } from './named-export';
import logger from './console-logger';

import GreetingHelper from './greeting-helper';
import Greeting from './greeting';
import { Person } from './person';

const mainAsync = async () => {

    const person = new Person({ firstName: "kenan", lastName: "hancer" });

    const greeting = new Greeting({ greetingHelper: new GreetingHelper() });

    const helloMessage = greeting.sayHello(person);

    console.log(helloMessage);

    const goodbyeMessage = greeting.sayGoodbye(person);

    console.log(goodbyeMessage);







    const isLogged = await logger.writeLogAsync('mainAsync is called.');

    console.log('--------------------');

    defaultNamedExport.group.showList();

    console.log('====================');

    group.showList();

    await logger.writeLogAsync('mainAsync is ending.');

};

mainAsync();