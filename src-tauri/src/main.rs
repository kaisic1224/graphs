#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
// https://www.quora.com/How-can-I-write-a-good-Admission-Information-Form-AIF-University-of-Waterloo
// https://medium.com/uwaterloo-voice/my-university-of-waterloo-2019-admissions-guide-just-trying-to-give-a-piece-of-my-thought-61e1569d38be
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
    

}

#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}