//----------------------------------------------------------------------------------------------------//
function simulate(element, eventName)
{
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}
//------------------------------------------------------------------------------------------------------//

var mName = ["AVDEY","AGAFON","ALEXANDR","ALEXEY","ALBERT","ANATOLIY","ANDREY","ANTON","ANFIM","ARISTARH","ARKADIY","ARSENIY","ARTEM","ARTUR","ARHIP","AFANASIY","BOGDAN","BORIS","VADIM","VALENTIN","VALERIY","VALERIAN","VARLAM","VARFOLOMEI","VASILIY","VENEDIKT","VENIAMIN","VIKENTIY","VIKTOR","VISSARION","VITALIY","VLADIMIR","VLADISLAV","VLADLEN","VLAS","VSEVOLOD","VYACHESLAV","GAVRIIL","GALAKTION","GENNADIY","GEORGE","GERASIM","GERMAN","GLEB","GORDEY","DANIIL","DEMID","DEMIAN","DENIS","DMITRIY","DOBRYNYA","DONAT","DOROFEI","EVGENIY","EVGRAF","EVDOKIM","EVSEY","EVSTAFIY","EGOR","EMELIAN","EREMEY","ERMOLAY","EFIM","ZHDAN","ZINOVIY","IANKIF","IVAN","IGNATIY","IGOR","ILLARION","ILYA","INNOKENTIY","IRAKLIY","JULIAN","KASIAN","KIM","KIRILL","KLIMENT","KONDRAT","KONSTANTIN","KORNILIY","KUZMA","KUPRIYAN","LAVRENTIY","LEV","LEONID","LEONTIY","LUKA","MAKAR","MAXIM","MARK","MARTYN","MATVEY","MELENTIY","MIRON","MIROSLAV","MITROFAN","MIHAIL","MSTISLAV","MERLIN","NAZAR","NESTOR","NIKANOR","NIKITA","NIKIFOR","NIKOLAY","NIKON","OLEG","ONISIM","PAVEL","PANTELEMON","PETR","PLATON","PORFIRIY","POTAP","PROKOPIY","PROTASIY","PROHOR","RODION","ROMAN","ROSTISLAV","RUSLAN","SAVVA","SAVELIY","SAMUIL","SVYATOPOLK","SVYATOSLAV","SEVASTYAN","SEMEN","SERGEY","SILVESTR","SPIRIDON","STANISLAV","STEPAN","TARAS","TIMOFEY","TIMUR","TIHON","TROFIM","FADEY","FEDOR","FEDOT","FELIX","FEOKTIST","FILAT","FILIPP","FOMA","HARITON","EDUARD","ERAST","YURIY","YAKOV","YAN","YAROSLAV","OSTAP","OSIP"];

var fName = ["KSENIA","EKATERINA","ILNARA","SVETLANA","LYUDMILA","AIGUL","NATALYA","ELENA","OLGA","MIROSLAVA","IRINA","VERA","ZITA","GITA","ANTONINA","MAHABAT","NINA","GALATEYA","ANNA","ULYANA","ANASTASIA","LARISA","MARINA","YULIA","ALEKSANDRA","KRISTINA","PAULINA","ZHANNA","GALINA","SOFIA","SARDAANA","VASILISA","VASILINA","LYUBOV","SERSEY","PANNA","FEKLA","RAISA","DARIA","LAIMA","HELGA","AGAFIA","AGRIPPINA","AKULINA","ALEVTINA","ALINA","ALLA","ANGELINA","VALENTINA","VALERIYA","VARVARA","VERONIKA","VIKA","GLAFIRA","DANA","EVGENIYA","EVDOKIYA","EVPRAKSIYA","EFROSINIYA","ELIZVETA","EPISTIMA","GERMIONA","ZINAIDA","ZLATA","ZOYA","INGA","INESSA","INNA","KARINA","KAROLINA","KIRA","KLAVDIYA","LADA","LIDIYA","LILIYA","MARGARITA","MARIA","MARFA","MATRENA","MIROSLAVA","NADEZHDA","NONNA","OKSANA","OKTYABRINA","PELAGEYA","RIMMA","SERAFIMA","SNEZHANA","TAISIYA","TAMARA","TATIANA","FAINA","FEVRONIYA","TSELESTINA","YANA","YAROSLAVA","ALENA","IVETA"];

var mSurname = ["BARKOV", "OTSCHEPENKO", "KOZYREV", "LEVASHEV","ALEXEENKO","PETROSYAN","MOYSYUK","BELOV","PAK","BUROV","GLAZURIN","GRABOV","GULYAEV","DUMOV","KLOKOV","KRASOV","LETOV","LOVTSOV","BORTSOV","SKOROKHOD","MALOV","MILOV","PANKOV","RUNOV","SVECHIN","TUROV","LUGOVITIN","KAZLAUSKAS","PETRAUSKAS","JANKAUSKAS","STANKEVICH","VASILIAUSKAS","URBONAS","KAVALIAUSKAS","ERMOLOV","VOYTOVICH","KUZMIN","PSHENICHNIKOV","VIDMAN","SHKAPICH","SVISTELNIKOV","TSKHE","FROLOVICH","EGORENKOV","PAVLUITENKO","SICHIHIN","MAGOMEDOV","GALIEV","SAYALDYAN","ONGUDAEV","YANKOVICH","GOLDMAN","MIRONOV","BOYARSKIY","VINOGRADOV","KOROLKOV", "SAMOILOV","ABBASOV","PROSUTINSKIY","PIVOVAROV","SAGACH","SHARDAKOV","POCHEKAEV"];

var fSurname = ["OTSCHEPENKO", "BYKOVA", "PETROSYAN", "ZATOCHNAIIA","ALEXEENKO","MOYSYUK", "SMAGINA","ORLOVA","SHKIREEVA","PAK","YUSUPOVA","SKOROKHOD","KAZLAUSKAITE","PETRAUSKAITE","JANKAUSKAITE","STANKEVICH","VASILIAUSKAITE","URBONAITE","KAVALIAUSKAITE","VOYTOVICH","PROKHOZHAEVA","ABRAMOVA","VIDMAN","SEREBRIAKOVA","BOGDANOVSKAIA","BUTAKOVA","FILATOVA","PANOVA","KOTLYAROVA","YAKOVLEVA","SOBOLEVA","BELOBORODOVA","BESSONOVA","KOBESOVA","SHARIPOVA","VASIUKOVA","SHKAPICH","TITOVA","KHOKHLOVA","TSKHE","FROLOVICH","GUSELNIKOVA","SMIRNOVA","PAVLUITENKO","USKOVA","LYUBINA","GRISHAEVA","YANKOVICH","SAMOILOVA","ABBASOVA","PROSUTINSKAYA","TOPONOGOVA","SAGACH","SHARDAKOVA","POCHEKAEVA"];

var mSecName = ["ANDREEVICH", "ALEXEEVICH", "VLADIMIROVICH", "PETROVICH","TIMERGALIEVICH","RUBENOVICH","AVDEEVICH","GERASIMOVICH","AGAFONOVICH","POTAPOVICH"];
var fSecName = ["ANDREEVNA", "PETROVNA", "ASHOTOVNA", "TIMOFEEVNA","EVGENIEVNA","KASIANOVNA","EDUARDOVNA","SPIRIDONOVNA","RODIONOVNA","LEVOVNA","ROMANOVNA"];

var sex = [1, 0];

var display = sex[Math.floor(Math.random()*2)];

if (display){
	var name=mName[Math.floor(Math.random()*mName.length)];
	var surname=mSurname[Math.floor(Math.random()*mSurname.length)];
	var fathername=mSecName[Math.floor(Math.random()*mSecName.length)];
	simulate(document.getElementById('reservationStepRadioMale'), "click");
} else {
	var name=fName[Math.floor(Math.random()*fName.length)];
	var surname=fSurname[Math.floor(Math.random()*fSurname.length)];
	var fathername=fSecName[Math.floor(Math.random()*fSecName.length)];
	simulate(document.getElementById('reservationStepRadioFemale'), "click");
};

eSurname = document.getElementById('reservationStepSurname');
eSurname.value = surname;
eSurname.dispatchEvent(new KeyboardEvent('keydown',  {'key':'Enter'}));

eFirstname = document.getElementById('reservationStepFirstName');
eFirstname.value = name;
eFirstname.dispatchEvent(new KeyboardEvent('keydown',  {'key':'Enter'}));

eFathername = document.getElementById('reservationStepMiddleName');
eFathername.value = fathername;
eFathername.dispatchEvent(new KeyboardEvent('keydown',  {'key':'Enter'}));