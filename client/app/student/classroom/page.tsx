import Friends from "@/app/ui/friendtable"
export default function Page() {

    return (
        <div>
            <div className="p-4">List of students in the classroom</div>
            <div className="mt-3">
          <Friends/>
            </div>
        </div>
    );
}