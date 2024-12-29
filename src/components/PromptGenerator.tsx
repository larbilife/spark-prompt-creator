import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const PROMPT_TYPES = [
  { value: "blog", label: "Blog Writing" },
  { value: "social", label: "Social Media" },
  { value: "marketing", label: "Marketing Copy" },
  { value: "story", label: "Story Writing" },
  { value: "seo", label: "SEO Content" },
];

const AI_MODELS = [
  { value: "gpt4", label: "GPT-4" },
  { value: "gpt35", label: "GPT-3.5" },
  { value: "claude", label: "Claude" },
  { value: "bard", label: "Google Bard" },
];

const TONES = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "friendly", label: "Friendly" },
  { value: "humorous", label: "Humorous" },
  { value: "formal", label: "Formal" },
];

export const PromptGenerator = () => {
  const [context, setContext] = useState("");
  const [promptType, setPromptType] = useState("");
  const [aiModel, setAiModel] = useState("");
  const [tone, setTone] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const { toast } = useToast();

  const generatePrompt = () => {
    if (!context || !promptType || !aiModel || !tone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate a prompt.",
        variant: "destructive",
      });
      return;
    }

    const prompt = `Create a ${tone} ${promptType} about ${context} optimized for ${aiModel}. 
    The content should be engaging, informative, and well-structured. 
    Include relevant examples and maintain a consistent tone throughout.
    Consider SEO optimization and readability.
    Break down complex concepts into digestible sections.
    End with a clear call-to-action or takeaway message.`;

    setGeneratedPrompt(prompt);
    toast({
      title: "Prompt Generated!",
      description: "Your prompt has been generated successfully.",
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    toast({
      title: "Copied!",
      description: "Prompt copied to clipboard.",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-6">
      <div className="space-y-4">
        <Textarea
          placeholder="Describe what you want to create..."
          value={context}
          onChange={(e) => setContext(e.target.value)}
          className="min-h-[100px]"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={promptType} onValueChange={setPromptType}>
            <SelectTrigger>
              <SelectValue placeholder="Select prompt type" />
            </SelectTrigger>
            <SelectContent>
              {PROMPT_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={aiModel} onValueChange={setAiModel}>
            <SelectTrigger>
              <SelectValue placeholder="Select AI model" />
            </SelectTrigger>
            <SelectContent>
              {AI_MODELS.map((model) => (
                <SelectItem key={model.value} value={model.value}>
                  {model.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger>
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              {TONES.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={generatePrompt}
          className="w-full bg-gradient-to-r from-brand-purple to-brand-indigo hover:opacity-90 transition-opacity"
        >
          Generate Prompt
        </Button>
      </div>

      {generatedPrompt && (
        <div className="mt-8 space-y-4">
          <div className="p-4 bg-white/5 rounded-lg border">
            <pre className="whitespace-pre-wrap">{generatedPrompt}</pre>
          </div>
          <Button onClick={copyToClipboard} variant="secondary" className="w-full">
            Copy to Clipboard
          </Button>
        </div>
      )}
    </div>
  );
};