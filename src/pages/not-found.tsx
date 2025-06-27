import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-6">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              Erro 404 - Página não encontrada!
            </h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Você especificou o link errado da página?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
