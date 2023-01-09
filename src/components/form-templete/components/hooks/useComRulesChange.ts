export default function useComRulesChange() {
  function changeRules(source: any): void
  function changeRules(source: any, index: number): void
  function changeRules(source: any, index: number, value: string): void
  function changeRules(source: any, index?: number, value?: string): void {
    if (value !== undefined && index !== undefined) {
      source.rules?.splice(index, 1, JSON.parse(value));
    } else if (index !== undefined) {
      source.rules?.splice(index, 1);
    } else {
      source.rules?.push({ required: true, message: '内容不能为空', trigger: 'blur' })
    }
  }

  return {
    changeRules
  }
}