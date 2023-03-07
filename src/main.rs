#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// https://www.quora.com/How-can-I-write-a-good-Admission-Information-Form-AIF-University-of-Waterloo
// https://medium.com/uwaterloo-voice/my-university-of-waterloo-2019-admissions-guide-just-trying-to-give-a-piece-of-my-thought-61e1569d38be
use ::tauri::SystemTray;
use tauri::{CustomMenuItem, Manager, SystemTrayEvent, SystemTrayMenu};
fn main() {
    let tray_hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let tray_quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let tray_menu = SystemTrayMenu::new()
        .add_item(tray_hide)
        .add_item(tray_quit);
    let system_tray = SystemTray::new().with_menu(tray_menu);

    tauri::Builder::default()
        .system_tray(system_tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
                "hide" => {
                    let window = app.get_window("main").unwrap();
                    window.hide().unwrap();
                }
                "quit" => app.exit(0),
                _ => {}
            },
            SystemTrayEvent::LeftClick { .. } => {
                // let window = app.get_window("main").unwrap();
                // window.show().unwrap();
                // window.set_focus().unwrap();

                let handle = app.app_handle();
                std::thread::spawn(move || {
                    let main_window = tauri::WindowBuilder::new(
                        &handle,
                        "main",
                        tauri::WindowUrl::App("index.html".into()),
                    )
                    .inner_size(1280.0, 700.0)
                    .title("StockEx")
                    .visible(true)
                    .build()
                    .unwrap();
                });
            }
            _ => {}
        })
        .invoke_handler(tauri::generate_handler![greet, unleash])
        .build(tauri::generate_context!())
        .expect("error while running tauri application")
        .run(|_app_handle, event| match event {
            tauri::RunEvent::ExitRequested { api, .. } => {
                api.prevent_exit();
            }
            _ => {}
        })
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn unleash() {
    format!("demons");
}
