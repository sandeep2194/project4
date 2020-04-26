import { link_checker } from "./link_checker";
import { postData, updateUI } from "./main_fuctions";
import { loader } from "./helpers";
import { error_handle } from "./helpers";
import { backend_callback_url_switch } from "./helpers";

function handleSubmit(event) {
    event.preventDefault()
    let testlink = document.getElementById('testlink')
    let testlink_value = testlink.value;
    document.getElementById('results').style.display = 'none';
    document.getElementById('link_text').innerHTML = " ";
    document.getElementById('link_ln').innerHTML = " ";
    document.getElementById('category').innerHTML = " ";
    document.getElementById('error').innerHTML = " ";

    if (link_checker(testlink_value)) {
        postData(backend_callback_url_switch('/classify'), { link: testlink_value })
            .then(() => {
                loader("start");
                setTimeout(() => {
                    updateUI()
                    loader();
                }, 3500);
            }).then(() => {
                clearTimeout();
            })

    } else {
        error_handle('Please enter a valid url')
    }

}
export { handleSubmit }