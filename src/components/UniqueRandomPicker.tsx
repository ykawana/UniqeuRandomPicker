import React, { useState } from 'react'; import { Container, TextField, Button, Typography, Box, List, ListItem, ListItemText, Paper, } from '@mui/material';

export default function UniqueRandomPicker() { const [maxNumber, setMaxNumber] = useState(''); const [remainingNumbers, setRemainingNumbers] = useState<number[]>([]); const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]); const [error, setError] = useState('');

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { setMaxNumber(e.target.value); };

const handleStart = () => { const num = parseInt(maxNumber, 10); if (isNaN(num) || num < 1) { setError('1以上の整数を入力してください'); return; } const numbers = Array.from({ length: num }, (_, i) => i + 1); setRemainingNumbers(shuffle(numbers)); setDrawnNumbers([]); setError(''); };

const shuffle = (array: number[]) => { return array.sort(() => Math.random() - 0.5); };

const handleDraw = () => { if (remainingNumbers.length === 0) return; const nextNumber = remainingNumbers[0]; setDrawnNumbers([...drawnNumbers, nextNumber]); setRemainingNumbers(remainingNumbers.slice(1)); };

return ( <Container maxWidth="sm" sx={{ mt: 5 }}> <Paper elevation={3} sx={{ p: 3 }}> <Typography variant="h5" gutterBottom> ユニークランダム数ジェネレーター </Typography> <TextField label="最大数を入力 (例: 10)" variant="outlined" fullWidth value={maxNumber} onChange={handleInputChange} error={!!error} helperText={error} sx={{ mb: 2 }} /> <Button variant="contained" color="primary" fullWidth onClick={handleStart}> 開始 </Button>

<Box textAlign="center" mt={3}>
      <Button
              variant="outlined"
                      color="secondary"
                              onClick={handleDraw}
                                      disabled={remainingNumbers.length === 0}
                                            >
                                                    ランダムに1つ選ぶ
                                                          </Button>
                                                              </Box>

                                                                  {drawnNumbers.length > 0 && (
                                                                        <Box mt={4}>
                                                                                <Typography variant="h6">これまでの出力:</Typography>
                                                                                        <List>
                                                                                                  {drawnNumbers.map((num, index) => (
                                                                                                              <ListItem key={index}>
                                                                                                                            <ListItemText primary={num} />
                                                                                                                                        </ListItem>
                                                                                                                                                  ))}
                                                                                                                                                          </List>
                                                                                                                                                                </Box>
                                                                                                                                                                    )}

                                                                                                                                                                        {remainingNumbers.length === 0 && drawnNumbers.length > 0 && (
                                                                                                                                                                              <Typography variant="body1" color="success.main">
                                                                                                                                                                                      すべての数を出力しました！
                                                                                                                                                                                            </Typography>
                                                                                                                                                                                                )}
                                                                                                                                                                                                  </Paper>
                                                                                                                                                                                                  </Container>

                                                                                                                                                                                                  ); }

                                                                                                                                                                                                  